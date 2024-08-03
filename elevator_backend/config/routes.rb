Rails.application.routes.draw do
  resources :calls, only: [:index, :create, :update, :destroy]
  resources :logs, only: [:index, :create]
  post 'arrive', to: 'elevator#arrive'
  get '/favicon.ico', to: proc { [204, {}, []] }
end