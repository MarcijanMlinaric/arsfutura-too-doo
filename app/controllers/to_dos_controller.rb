class ToDosController < ApplicationController
    protect_from_forgery with: :null_session
    
    def create
        todo = ToDo.new(params.require(:to_do).permit(:name, :checked, :list_id))

        if todo.save
            render json: ToDoSerializer.new(todo).serialized_json
        else
            render json: {error: todo.errors.messages}, status: 422
        end
    end


    def update
        todo = ToDo.find_by(id: params[:id])

        if todo.update(params.require(:to_do).permit(:checked))
            render json: ToDoSerializer.new(todo).serialized_json
        else
            render json: {error: todo.errors.messages}, status: 422
        end
    end

end
    