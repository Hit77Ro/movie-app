=================== useState ======================
-> when the state of a component changes, it triggers a re-render of the component.
-> never set stat manually (eg. counter = 0 ) ;
-> only change it by it's setter function (eg.setCounter)
<Note !!
<button onClick={ callback(value)} ></button>
when the component is renderd the callback is immediatly called
without even clicking on the button

=================== seEffect ===========================
-> run immediatly after the component is renderd
-> run after every render

###### <parametres callback function , dependency array

<dependency-array :

> => It allows you to specify dependencies that will trigger the effect to run only when certain values change.
> => If the dependency array is empty, the effect runs only once after the initial render.

<Clean-up-Function:

> 1)-> it's returned by the effect function
> 2)-> it's executed when the component unmounts(deleted from the Dom , or no longer needed )
> 3)-> Role : performing any necessary clean-up tasks before the component is removed from the DOM, such as canceling network requests, unsubscribing from event listeners, or clearing timers.

<Examples:

> 1)-> useEffect(() => alert("hello") );
> => alert function will run once aafter every render (eg . stat changes..)
> 2)-> useEffect(() => alert("hello") ,[counter]);
> => alert function will run whenever ( counter) changes it's value
> 3)-> useEffect(() => alert("hello") ,[]);
> => alert function will run once after the component is rendered
> \*/
