### What is this?
This technique breaks down procedural content generation into a series of small replaceable micro-generators chained together in sequence.

### What is this for?
Consider the task of generating a dungeon which has multiple floors and rooms.
Writing a single generator to generate the entire dungeon will quickly result in a generator that is very complex.
A single generator like this would have to determine the size, shape, and contents of the rooms as well as how many rooms there are, how they are laid out, how many floors there will be, and many other things.
Clearly this generator will become a complicated unwieldy mess quickly!

This method breaks down the generation task into a series of small micro-generators which are each responsible for generating one piece of the dungeon.
This results in less complicated generators and the ability to swap out generators for different generation results.

### How does it work?
Imagine having several micro-generators, each of which does one small task.
You could have the following independent generators:

 * Theme generators
 * Size generators
 * Floor layout generators
 * Room floorplan generators

Each generator would take a dungeon as input and modify it.
The process of dungeon generation would involve creating an empty dungeon and passing through the generators one-by-one until a finished dungeon comes out the end.

### Generators in more detail
Let's look at the process of creating a dungeon with these example generators in more detail.

#### Theme generator
Determines the overall theme of the dungeon such as whether it is a natural cave, mine, crypt, or dwarven home.

#### Size generator
Determines how many floors the dungeon has and the size and shape of the floors.

#### Floor layout generator
Determines how many rooms, corridors, and other open areas exist on a floor and how they are connected to each other

#### Room floorplan generator
Lays out the floorplan of a single room. Places walls, traps, obstacles, treasures, monsters and other things inside a room.

### All together in action
Each of these micro-generators should be very simple to implement.
When a dungeon needs to be generated the first generator in the queue is run to determine the theme of the dungeon.
Imagine it decides the dungeon is a crypt.
It takes an empty dungeon object as input and adds metadata to it such as "setting:crypt" and "difficulty:moderate".

This dungeon is then passed to the next generator which determines its size.
The size is determined to be 2 floors deep, 50 units wide and 25 units tall.
This information is added to the dungeon itself, possibly in the form of allocating space to hold the information

Once the size is complete the floor would be laid out using one of many floor layout generators.
For example a drunken walk could be used to place the floors.
This phase would also determine where the entrance to the dungeon is and the exits that move between levels.
If the rooms are not all the same size this phase would be used to determine the size and shape of the rooms.

Finally the room floorplan generator would be used on each room to determine the layout of the individual room.
This includes placing treasure, traps, monsters, and other fun things.
This is a case where it would make sense to have a large number of different generators.
Each room has an appropriate generator chosen for it at random resulting in a lot of room variety without making any single generator too complicated.

### Things worth mentioning
This method has a lot of advantages.
Generation phases can be delayed until absolutely needed, for example a floor of a dungeon would not necessarily need to be generated until a player entered that floor.
This would result in shorter load times and smaller file sizes.

Individual micro-generators could also be selected based on metadata information set in the dungeon during earlier phases.
For example some room floorplan generators could be marked as requiring the dungeon be man-made or naturally occurring, and this metadata could be placed in the dungeon by the theme generator.

All in all this method offers a lot of generation power while simultaneously being very simple, elegant, and extensible.