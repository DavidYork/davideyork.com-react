### L-system fractals
A was hanging out with my awesome friend [Anatomecha][anatomecha] in one of Seattle's new super awesome, super hip, super gentrified edison-bulb-and-a-million-beers-on-tap bars.
He showed me a system he had been working on to create l-system fractals with Unity using very simple properties of how Maya and Unity represent 3D models in 3D space.

Best.
Night.
Ever!

I like beer and fractals because they are both awesome, what can I say?

For the uninitiated an l-system fractal is basically where you take a shape, lets call it an "axiom", then you replace the axiom with another shape, let's call that a "generator" which just so happens to be made up of a bunch of axioms.
Rinse and repeat until you have created a self-referential fractal of pure awesomeness.
Each rinse and repeat is called an "iteration."

Would you like to know [more?][wikipedia]

![/content/images/axiom.png](L-system fractal axiom) and generator: ![/content/images/generator.png](L-system fractal generator)

which, in the cases of these pyramids creates what's called a [Sierpinski Pyramid][sierpinski].

For those of you *FRACTAL EXPERTS* out there there is nothing new yet.

### Awesomesauce
Here is the awesomesauce.

Maya will let you create a model which contains named compenents in a hierarchy.
Unity can import the model and preserve the hierarchy and the components.
If you create a hierarchical model in Maya which is meant to be a generator, and you pick some of the components in that model's hierarchy to be axioms, then when you load it into Unity all you have to do to make an l-system fractal iteration on it is to find the leaf nodes and replace them with freshly instantiated generators.

Piece of cake right?

Essentially, yes.
Note there are always details.
The position, scale, and rotation of the models needs to be preserved.
Notice how the Sierpinsky Pyramid replaces a large pyramid with four smaller ones at various offsets?
Yes, these offsets and scale factors (and rotation as well) can be encoded in the Maya model trivially which will be explained now.

### Maya representation of a generator

So we are going to create this:
![/content/images/tree_of_glitch_truth.png](L-system fractal tree)

By creating the following two generators:

End branch:
![/content/images/endbranch.png](L-system fractal end branch generator)
Middle branch:
![/content/images/middlebranch.png](L-system fractal middle branch generator)


We then load them up in Unity and create a script that iterates *n* times over a [GameObject][gameobject] looking for leaf nodes with a *name* that corresponds to the name of a generator.
Then when you find one, you [Destroy][destroy] it and replace it with a newly [Instantiated][instantiate] instance of the generator of that name.

So have a look at what this looks like in Unity, with an attached script:

![/content/images/unity_tree.png](L-system fractal tree setup in Unity)


Notice the [Transform][transform] in the [Inspector][inspector].
It contains the relative position, rotation and scale of an axiom.
This means when you replace that axiom with a newly instantiated generator you will need to set the generator's [Local Scale][local_scale], [Local Rotation][local_rotation] and [Local Position][local_position] to these values so it will be in the right spot.

Note the script has two <code>generators</code> listed, the <code>end\_branch\_generator</code> and <code>middle\_branch\_generator</code>. These are references to the models in the project, so during an iteration when a node is found with a name like <code>end\_branch\_\_0</code> the <code>LSystem.cs</code> script knows to replace it with a <code>end\_branch</code> instance.

You may notice the leaf nodes have names like <code>end\_branch\_\_0</code> with a double underscore - this is because Maya requires unique names for it's scene nodes so the script simply discards the <code>\_\_</code> and everything after it during the iteration process.

### So....
So there is a lot you can do with this.
Essentially you can build a model in Maya, name nodes, and then replace those nodes with other models that have the same name (or, if you prefer, by any more sophisticated replacement algorithm you choose) to recursively create and define a more interesting creation.
Use your imagination and think on that for a minute, it's pretty huge.

![/content/images/tree_0.png](L-system fractal tree iteration 0)
![/content/images/tree_1.png](L-system fractal tree iteration 1)
![/content/images/tree_2.png](L-system fractal tree iteration 2)


**Have fun!**

[anatomecha]: http://www.anatomecha.com
[wikipedia]: https://en.wikipedia.org/wiki/L-system
[sierpinski]: https://www.google.com/search?q=sierpinski+pyramid
[gameobject]: http://docs.unity3d.com/ScriptReference/GameObject.html
[destroy]: http://docs.unity3d.com/ScriptReference/Object.Destroy.html
[instantiate]: http://docs.unity3d.com/ScriptReference/Object.Instantiate.html
[transform]: http://docs.unity3d.com/ScriptReference/GameObject-transform.html
[inspector]: http://docs.unity3d.com/Manual/Inspector.html
[local_scale]: http://docs.unity3d.com/ScriptReference/Transform-localScale.html
[local_rotation]: http://docs.unity3d.com/ScriptReference/Transform-localRotation.html
[local_position]: http://docs.unity3d.com/ScriptReference/Transform-localPosition.html