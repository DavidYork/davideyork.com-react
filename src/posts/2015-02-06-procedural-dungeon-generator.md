This method describes a generator that places square (or rectangular) cells on a grid which are connected to each other by their sides.
It keeps track of metadata information about the cells that are useful for doing things like placing bosses, keys and locked doors, etc.

TODO: Alter article so you're placing the end first.

Consider a grid.

From the start:
Pick a random point on the grid. Mark that point as the start. Perform a [drunken walk][drunken walk] from the start until stuck (unable
to move forward or turn from a point). While walking mark every grid with an 'A' and a number corresponding to how many steps you took.
For example you start at step 0, then move to step 1, step 2, etc. As you are walking you are placing rooms.

<!-- <cool diagram/animated gif that shows initial drunken walk> -->

From the end:
Pick a random point on the grid that isn't marked 'A'. This is the location of the exit. Perform a
[recursive drunken walk][recursive drunken walk] from there. Continue moving until intersecting with a cell marked 'A'.
Mark all the cells during the walk as 'B' and number them starting with 0 at the exit and increasing the number. Because this is a
[recursive drunken walk][recursive drunken walk] this path will intersect with path 'A' at some point.

<!-- <cool animated gif that shows recursive drunken walk> -->

Filling the rest of the level (optional):
The level can now be considered complete and can be finished by the player. In other words there is a path from start to exit. However
the dungeon is very simple so this step adds complexity in the form of added dead ends and filling in the blank areas. For each empty
cell left in the grid start another [recursive drunken walk][recursive drunken walk] until the walk collides with a marked cell. with
every cell marked during the drunken walk mark it with an increasing letter ('C', then 'D', then 'E' and so on) and mark the cells
starting in the walk with increasing numbers starting with 0.

In other words the first of these drunken walks is the 'C' walk marking cells C0, C1, C2, etc. until intersecting with an existing
marked cell. The second walk is the 'D' walk marking cells D0, D1, D2, etc.

Final analysis:
At this point you should have an interesting dungeon laid out. It has dead-ends, a start, an exit, and a guaranteed path from start to
end. The letter and number markings are, in my opinion, the most interesting part of this generator. You always know by inspection of a
single cell a lot of interesting information about it. For example cell B1 will always be the cell right before an exit.

Every edge between two letters is something you can guarantee the player will be able to reach the lower letter first. Because you know
this you can do interesting things with this information such as placing keys at dead ends for a letter that unlock a door you place at
the entrance to a higher letter. You know you can place a treasure at a dead-end and you know which room to place a miniboss to guard
the treasure. A treasure can belong at any '0' and the '1' for that chain[][introduce or replace the word chain] will be a great spot
for a treasure guard. You know for the final exit at 'B0' just how many cells need to be walked through sequentially before the player
can exit (every B cell). This enables interesting chains of encounters such as an "exit room" preceeded by a "treasure room" preceeded by a
"boss room" preceeded by all the rooms in this chain having a higher difficulty level than other chains for example.

Another thing that can be observed is that since the player is guaranteed to be able to visit every lower letter chain before the
higher lettered chains you can do things like place a desireable object at the end of a higher letter chain, and extend the room into
a lower lettered chain such that you can see the object but not acquire it until later like so:

<!-- <cool animated gif that shows chest and room with wall> -->
