class ApplicationController < ActionController::API
  def after_sign_in_path_for(resource)
    'http://localhost:3001'
  end
end
