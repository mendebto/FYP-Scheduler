import random
from deap import base, creator, tools, algorithms

# Define the possible time slots for meetings
time_slots = ["Monday 9:00", "Monday 10:00", "Monday 11:00", #this needs to be changed
              "Tuesday 9:00", "Tuesday 10:00", "Tuesday 11:00", 
              "Wednesday 9:00", "Wednesday 10:00", "Wednesday 11:00"]

# Define the supervisor's preferred meeting times
supervisor_preferences = ["Monday 10:00", "Tuesday 9:00", "Wednesday 11:00"] #this needs to be changed

# Create the Fitness and Individual classes using DEAP
creator.create("FitnessMin", base.Fitness, weights=(-1.0,))
creator.create("Individual", list, fitness=creator.FitnessMin)

# Initialize the toolbox
toolbox = base.Toolbox()

# Register the functions to create individuals and populations
toolbox.register("indices", random.sample, range(len(time_slots)), len(time_slots))
toolbox.register("individual", tools.initIterate, creator.Individual, toolbox.indices)
toolbox.register("population", tools.initRepeat, list, toolbox.individual)

# Define the evaluation function
def evaluate(individual):
    # Penalize individuals that don't match supervisor's preferences
    penalty = sum(1 for slot in supervisor_preferences if slot not in [time_slots[i] for i in individual])
    return (penalty,)

# Register the genetic operators
toolbox.register("mate", tools.cxPartialyMatched)
toolbox.register("mutate", tools.mutShuffleIndexes, indpb=0.05)
toolbox.register("select", tools.selTournament, tournsize=3)
toolbox.register("evaluate", evaluate)

# Create initial population
population = toolbox.population(n=10)

# Define number of generations
n_generations = 100

# Run the algorithm
for gen in range(n_generations):
    offspring = algorithms.varAnd(population, toolbox, cxpb=0.5, mutpb=0.1)
    fits = toolbox.map(toolbox.evaluate, offspring)
    for fit, ind in zip(fits, offspring):
        ind.fitness.values = fit
    population = toolbox.select(offspring, k=len(population))

# Select the best individual
best_ind = tools.selBest(population, k=1)[0]

# Print the best individual
print("Best individual:", best_ind)
print("Meeting schedule:")
for i, slot in enumerate(best_ind):
    print(f"Student {i+1}: {time_slots[slot]}")
