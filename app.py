from flask import Flask, render_template, request, jsonify
import sqlite3
import os

app = Flask(__name__)

database_file = 'banco.db'

if not os.path.exists(database_file):
    with sqlite3.connect(database_file) as conn:
        cursor = conn.cursor()
        cursor.execute("CREATE TABLE alunos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, turma TEXT NOT NULL, livro TEXT NOT NULL, autor TEXT NOT NULL, emprestimo TEXT NOT NULL, devolucao TEXT NOT NULL)")
        conn.commit()

def get_db_connection():
    conn = sqlite3.connect(database_file)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/submit', methods=['POST'])
def submit_form():
    try:
        data = request.get_json()
        data = data.get('nome')
        data = data.get('turma')
        data = data.get('livro')
        data = data.get('autor')
        data = data.get('emprestimo')
        data = data.get('devolucao')

        if not data or not data:
            return jsonify({'sucesso': False, 'error': 'Dados inválidos'})
        
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('INSERT INTO alunos(nome, turma, livro, autor, emprestimo, devolucao) VALUES (?, ?, ?, ?, ?, ?)', (nome, turma, livro, autor, emprestimo, devolucao))
        conn.commit()
        conn.close()
        return jsonify({'sucesso': True})
    except Exception as e:
        return jsonify({'sucesso': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
