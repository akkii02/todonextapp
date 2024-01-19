import { MongoClient } from "mongodb";

export default function Completedtask(props){
      return <Completedtodos completedtodos={props.todos}/>
      }
      
      export async function getStaticProps(props){
      
          const client = await MongoClient.connect(
              "mongodb+srv://akshaysable097:oJ6cxgSayX54WHzY@cluster0.roilqpl.mongodb.net/todos?retryWrites=true&w=majority"
            );
            const db = client.db();
      
            const todosdata = db.collection("todos");
      
            const todos = await todosdata.find({completed:true}).toArray();
            client.close();
      
          return{
              props:{
                  todos: todos.map((todo)=>({
                      task:todo.task,
                      id: todo._id.toString()
                  }))
              },
          };
      }