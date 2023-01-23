require 'jwt'

class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  # skip_before_action :verify_authenticity_token, only: :google_oauth2

  def google_oauth2
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    @user = User.from_omniauth(request.env["omniauth.auth"])
    puts @user.attributes
    # sign in user with devise
    sign_in(@user)

    auth_token = ::JWT.encode(
      { user_id: @user.id },
      Rails.application.credentials.secret_key_base,
    )

    redirect_to "http://localhost:3001?token=#{auth_token}"
  end

  def failure
    puts 'FAILURE'
    redirect_to 'http://localhost:3001'
  end
end
