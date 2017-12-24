This is a generation technique that places open spaces on a grid.
Start with a solid grid, such as a 2D array of walls. Pick a starting point and mark that as open/empty.
Move in a random direction if and only if the next cell in that direction is solid. Mark that as empty.
Repeat until you are no longer able to move, or you have a large enough area that has been marked as empty
that you are satisfied with the walk.

![Drunken walk](/content/images/pcg_drunken_walk_single.gif)
![Drunken walk](/content/images/pcg_drunken_walk_single2.gif)


You can use multiple walks to generate a more interesting area. The additional walks can start from an
open cell, or they can start from a closed cell and be allowed to "merge" into an existing cell if they
would intersect with the cell.


![Drunken walks with 10 steps](/content/images/pcg_drunken_walk_multiple_10.gif)
![Drunken walks with 10 steps](/content/images/pcg_drunken_walk_multiple_10_2.gif)


Note that this technique works well for generating areas that have open cells and wall cells as shown above, but it also works
for generating an area with areas with clear adjoining exits (e.g.: rooms). Simply place an area in each visited cell and a
connection leading from this cell the the previous one.


![Drunken walks with adjoining areas](/content/images/pcg_drunken_walk_rooms_single.gif)


Multiple drunken walks with adjoining areas requires an extra step for each subsequent walk to join the walks together.
One option is to start walks after the first in one of the previously visited rooms (shown below).


![Drunken walks with adjoining areas](/content/images/pcg_drunken_walk_rooms_multiple_1.gif)
![Drunken walks with 15 steps](/content/images/pcg_drunken_walk_rooms_multiple_2.gif)


That is the drunken walk. There are many ways to tweak it worth experimenting with. For example when determining the random
direction you can give a bias towards choosing the direction of forward making the generated area have more long corridors.
Another tweak is to randomly determine how many steps each walk will take, or to have the likelihood that a walk should end
be determined by the distance from the starting point.

Have fun with it!