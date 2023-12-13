from django.shortcuts import render
from ga import genealgorithm, initialize_population
# Create your views here.
"""
VIEWS CONTAINS FUNCTIONS THAT HANDLE REQUESTS
FROM THE USER, RETRIEVING, RENDERING, SENDING
TO THE USER    
"""

def timetable_view(request):
    students = Student.object.all()
    supervisor = Supervisor.objects.all()
    timeslots = Timeslot.objects.all()
    
    population = initialize_population(population_size=5, timeslots=timeslots, supervisor=supervisor, students=students)
    best_timetable = genalgorithm(population=5, generations=50,timeslots=timeslots, supervisor=supervisor, students=students)
    
    best_fitness = eval_fitness(best_timetable)
    
    return render(request, 'timetable.hmtl', {'best_timetable': best_timetable, 'best_fitness': best_fitness})