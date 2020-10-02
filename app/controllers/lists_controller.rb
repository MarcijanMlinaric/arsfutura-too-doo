class ListsController < ApplicationController
    protect_from_forgery with: :null_session

    def show
        list = List.find_by(id: params[:id])
        if list == nil
            redirect_to :action => "create"
        else
            @list = ListSerializer.new(list, options).serialized_json
        end
    end

    def create
        list = List.new(title: 'Untitled')

        if list.save
            redirect_to action: "show", id: list.id
        else
            render json: {error: list.errors.messages}, status: 422
        end
    
    end    
    
    def update
        list = List.find_by(id: params[:id])

        if list.update(params.require(:list).permit(:title))
            render json: ListSerializer.new(list).serialized_json
        else
            render json: {error: list.errors.messages}, status: 422
        end
    end


    def options
        @options = {include: %i[to_dos]}
    end

end
