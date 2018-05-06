10.times do
  Location.create(
    name: Faker::Space.galaxy,
    description: Faker::Hipster.sentence,
  )
  20.times do 
    Item.create(
      name: Faker::HarryPotter.character, 
      description: Faker::HarryPotter.quote,
      quantity: Faker::Number.between(1, 10), 
      replace: Faker::Boolean.boolean(0.2),
    )
  end 
end

puts 'Seeded Stupid'