require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  test "it gets created with default values" do
    idea = Idea.create

    assert_equal nil, idea.title
    assert_equal nil, idea.body
    assert_equal "Swill", idea.quality
  end

  test "it can be created with quality level of plausible" do
    idea = Idea.create(quality: 1)

    assert_equal nil, idea.title
    assert_equal nil, idea.body
    assert_equal "Plausible", idea.quality
  end

  test "it can be created with quality level of genius" do
    idea = Idea.create(quality: 2)

    assert_equal nil, idea.title
    assert_equal nil, idea.body
    assert_equal "Genius", idea.quality
  end
end
