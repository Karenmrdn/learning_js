/* When a component is wrapped in React.memo(), React renders 
the component and memoizes the result. Before the next render, 
if the new props are the same, React reuses the memoized result skipping the next rendering. 
React.memo(Movie) returns a new memoized component */
export function Movie({ title, releaseDate }) {
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}

export default React.useMemo(Movie);

<>
  // First render - memoized Movie IS INVOKED.
  <Movie title="Heat" releaseDate="December 15, 1995" />
  // Second render - memoized Movie IS NOT INVOKED.
  <Movie title="Heat" releaseDate="December 15, 1995" />
</>;

/* !!! By default React.memo() does a shallow comparison of props and objects of props.
To customize the props comparison you can use the second argument 
to indicate an equality check function: */
function moviePropsAreEqual(prevMovie, nextMovie) {
  return (
    prevMovie.title === nextMovie.title &&
    prevMovie.releaseDate === nextMovie.releaseDate
  );
}

React.memo(Component, moviePropsAreEqual(prevProps, nextProps));
