Rails.application.routes.draw do
  resources :calls, only: [:index, :create, :update, :destroy]
  resources :logs, only: [:index, :create]
  put 'elevator/arrive', to: 'elevator#arrive'
end