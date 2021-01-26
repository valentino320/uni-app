class LoginsController < ApplicationController

  skip_before_action :require_user, only: [:new, :create]

  def new

  end

  def create
    if session[:student_id]
      flash[:notice] = "Already logged in!"
      redirect_to student
    end
    student = Student.find_by(email: params[:logins][:email].downcase)
    if student && student.authenticate(params[:logins][:password])
      session[:student_id] = student.id
      flash[:notice] = "You have suddesfully loggen in"
      redirect_to student
    else
      flash.now[:alert] = "Something was wrong with your login information"
      render 'new'
    end
  end

  def destroy
    session[:student_id] = nil
    flash[:notice] = "You have succesfully logged out"
    redirect_to root_path
  end

end