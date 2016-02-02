Rails.application.routes.draw do
  root 'ideas#index'

  namespace :api do
    namespace :v1 do
      resources :ideas, only: [:index, :show, :destroy, :update, :create], defaults: { format: :json } do

      end
    end
  end
end
