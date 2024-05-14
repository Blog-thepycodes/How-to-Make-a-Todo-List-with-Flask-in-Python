from flask import Flask, render_template, request
 
 
app = Flask(__name__)
 
tasks = []  # Example tasks list
 
 
@app.route('/')
def index():
   return render_template('index.html', tasks=tasks)
 
 
@app.route('/delete', methods=['POST'])
def delete_task():
   task = request.json.get('task')
 
 
   if task in tasks:
       tasks.remove(task)
       return 'Task deleted successfully', 200
   else:
       return 'Task not found', 404
 
 
if __name__ == "__main__":
   app.run(debug=True)
