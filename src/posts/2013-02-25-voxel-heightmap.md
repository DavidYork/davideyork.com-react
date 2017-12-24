Voxel-based graphics engine. Written in C++ and x86 assembly. High-performance “fly-through” engine created just for fun during college.

I thought it would be cool to play with voxel heightmaps so I created a voxel heightmap renderer in C++.  Uses raycasting, sorta.  Ground-traversal raycasting where you drop a ray directly to the ground from the viewer, then move it forward along the ground from the viewer.  Each time it “moves up” (intersects with higher elevation) it draws the appropriate pixels on the screen as determined by a colormap that accompanied the voxel heightmap.

Note this was long before [Minecraft][minecraft], before [Delver][delver] and certainly before [Voxels][voxels] were cool.

![Real-time voxel heightmap](/content/images/voxels1.jpg)
![My voxels are smaller than Minecraft :)](/content/images/voxels2.jpg)

[minecraft]: http://minecraft.net/
[delver]: http://www.delvergame.com/
[voxels]: http://en.wikipedia.org/wiki/Voxel

