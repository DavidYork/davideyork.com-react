This is a generator technique that builds on the [drunken walk]({% post_url 2015-02-08-drunken-walk %}). This walk type is
ideal for filling an area with twisting passageways or for guaranteeing a walk reaches a certain point
such as an exit.

The idea is to make a normal drunken walk, then when finished or stuck repeat the walk from all the previously visited
cells until no further walks are possible or the end condition is met. End conditions could be reaching a special termination
cell (such as an exit) or walking a certain number of steps.

This is a typical drunken walk:

![pcg_drunken_walk_rooms_single.gif](Drunken walks with adjoining areas)

This is a recursive drunken walk:


