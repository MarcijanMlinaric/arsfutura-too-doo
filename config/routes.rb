Rails.application.routes.draw do
  root controller: :lists, action: :create

  resources :lists, param: :id

  get '*path', to: 'lists#create', via: :all

end
