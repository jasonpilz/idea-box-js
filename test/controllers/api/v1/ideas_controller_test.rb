require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test "#index responds to json" do
    get :index, format: :json
    assert_response :success
  end

  test "#index returns array of correct number of JSON objects" do
    get :index, format: :json

    json_response = JSON.parse(response.body)

    assert_equal Array, json_response.class
    assert_equal 3, json_response.count
  end

  test "#show returns the correct idea" do
    last_idea = Idea.last
    get :show, format: :json, id: Idea.last.id

    json_response = JSON.parse(response.body)

    assert_equal last_idea.id, json_response["id"]
  end

  test "#create creates an idea" do
    assert_difference 'Idea.count' do
      post :create, format: :json
    end

    assert_equal "Swill", Idea.last.quality
  end

  test "#update updates an idea" do
    before_update = Idea.last

    patch :update, format: :json, id: Idea.last.id, title: "Terrible Idea"

    refute_equal before_update.title, Idea.last.title
    assert_equal "Terrible Idea", Idea.last.title
  end

  test "#destroy removes idea from database" do
    last_idea = Idea.last
    delete :destroy, format: :json, id: Idea.last.id
    refute_equal last_idea.id, Idea.last.id

    assert_difference 'Idea.count', -1 do
      delete :destroy, format: :json, id: Idea.last.id
    end
  end
end
