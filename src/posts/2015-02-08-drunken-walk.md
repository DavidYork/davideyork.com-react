This is a **procedural generation technique** that places open spaces on a grid. It can be used for generating **dungeons**, **castles**, and other environments for video games.

Start with a solid grid, such as a 2D array of walls. Pick a starting point and mark that as open/empty. Move in a random direction if and only if the next cell in that direction is solid. Mark that as empty.

Repeat until you are no longer able to move, or you have a large enough area that has been marked as empty that you are satisfied with the walk.

<div class="img-group">
<img class="img-inline-left" alt="Drunken walk" src="/content/images/pcg_drunken_walk_single.gif"><img class="img-inline-right" alt="Drunken walk" src="/content/images/pcg_drunken_walk_single2.gif">
</div>

You can use multiple walks to generate a more interesting area. The additional walks can start from an
open cell, or they can start from a closed cell and be allowed to "merge" into an existing cell if they
would intersect with the cell.

<div class="img-group">
<img class="img-inline-left" alt="Drunken walks with 10 steps" src="/content/images/pcg_drunken_walk_multiple_10.gif"><img class="img-inline-right" alt="Drunken walks with 10 steps" src="/content/images/pcg_drunken_walk_multiple_10_2.gif">
</div>

Note that this technique works well for generating areas that have open cells and wall cells as shown above, but it also works
for generating an area with areas with clear adjoining exits (e.g.: rooms). Simply place an area in each visited cell and a
connection leading from this cell the the previous one.

<div class="img-group">
![Drunken walks with adjoining areas](/content/images/pcg_drunken_walk_rooms_single.gif)
</div>

Multiple drunken walks with adjoining areas requires an extra step for each subsequent walk to join the walks together.
One option is to start walks after the first in one of the previously visited rooms (shown below).

<div class="img-group">
<img class="img-inline-left" alt="Drunken walks with adjoining areas" src="/content/images/pcg_drunken_walk_rooms_multiple_1.gif"><img class="img-inline-right" alt="Drunken walks with 15 steps" src="/content/images/pcg_drunken_walk_rooms_multiple_2.gif">
</div>

That is the drunken walk. There are many ways to tweak it worth experimenting with. For example when determining the random
direction you can give a bias towards choosing the direction of forward making the generated area have more long corridors.
Another tweak is to randomly determine how many steps each walk will take, or to have the likelihood that a walk should end
be determined by the distance from the starting point.

Have fun with it!