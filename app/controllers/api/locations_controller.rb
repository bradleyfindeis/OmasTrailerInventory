class Api::LocationsController < ApplicationController
  before_action :set_location, only: [:show, :update, :destroy]

  def index
    render json: Location.all 
  end

  def show
    render json: @location
  end

  def create
    location = Location.new(location_params)

    if location.save
      render json: location
    else
      render json: location.errors, status: 422
    end
  end

  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: @location.errors, status: 422
    end
  end

  def destroy
    Location.find(params[:id]).destroy
  end


  private
    def set_location
      @location = Location.find(params[:id])
    end

    def product_params
      params.require(:location).permit(:name, :description)
    end
end
