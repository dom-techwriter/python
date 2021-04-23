from flask import Flask
from helper import pets

app = Flask(__name__)

@app.route('/')
def index():
    return '''
    
    <h1>Adopt a pet!</h1>
    <p>Browse through the links below to find your new furry friend:</p>
    <ul>
        <li><a href="/animals/dogs">Dogs</a></li>
        <li><a href="/animals/cats">Cats</a></li>
        <li><a href="/animals/rabbits">Rabbits</a></li>
    </ul>

    '''

@app.route('/animals/<pet_type>')
def animals(pet_type):
  html = f"<h1>List of {pet_type}</h1>"
  html += "<ul>"
  for pet_index_array, pet in enumerate(pets[pet_type]): # So for each pet in a given pet_type
    html += '<li>' + f'<a href="/animals/{pet_type}/{pet_index_array}">' + pet["name"] + '</li>'
  html += "</ul>"
  return html

@app.route('/animals/<pet_type>/<int:pet_id>')
def pet(pet_type, pet_id):
    pet = pets[pet_type][pet_id]
    html = f'<h1>{pet["name"]}</h1></br>'
    html += f'<img src="{pet["url"]}"/>'
    html += f'<p>{pet["description"]}</p>'
    html += '<ul>'
    html += f'<li>{pet["breed"]}</li>'
    html += f'<li>{pet["age"]}</li>'
    html += '</ul>'
    return html