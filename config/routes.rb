Rails.application.routes.draw do
  root controller: :lists, action: :create

  resources :lists, param: :id, :only => [:create, :show, :update]
  resources :to_dos, :only => [:create, :update]

  get '*path', to: 'lists#create', via: :all

end
