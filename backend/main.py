from fastapi import FastAPI, Form
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: list
    edges: list


def is_dag(nodes,edges):
    graph= {}

    for node in nodes:
        graph[node["id"]] = []

    for edge in edges:
        graph[edge["source"]].append(edge["target"])

    visited = set()
    path = set()


    def dfs(node):
        if node in path :
            return False
        if node in visited:
            return True
        
        visited.add(node)
        path.add(node)

        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False
            
        path.remove(node)
        return True
    
    for node in graph:
        if not dfs(node):
            return False
        
    return True

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(data: PipelineData):

    num_nodes = len(data.nodes)
    num_edges = len(data.edges)

    dag = is_dag(
        data.nodes,
        data.edges
    )
    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": dag
    }
