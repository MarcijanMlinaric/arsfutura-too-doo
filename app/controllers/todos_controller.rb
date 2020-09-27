class ListsController < ApplicationController
    def create
        todo = ToDo.new(params.require(:to_do).permit(:name, :checked, :list_id))

        if todo.save
            render json: ToDoSerializer.new(todo).serialized_json
        else
            render json: {error: todo.errors.messages}, status: 422
        end

end
    