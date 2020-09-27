class ListsController < ApplicationController
    def show
        list = List.find_by(id: params[:id])

        render json: ListSerializer.new(list, options).serialized_json
    
    end

    def create
        list = List.new(title: 'Untitled')

        if list.save
            #render json: ListSerializer.new(list).serialized_json
            redirect_to :action => "show", :id => list.id
        else
            render json: {error: airline.errors.messages}, status: 422
        end
    
    end    
    
    def update
        list = List.find_by(id: params[:id])

        if list.update
            render json: ListSerializer.new(list).serialized_json
        else
            render json: {error: airline.errors.messages}, status: 422
        end
    end


    def options
        @options = {include: %i[to_dos]}
    end

end
