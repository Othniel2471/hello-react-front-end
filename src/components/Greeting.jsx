import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (greeting) {
    return <h1>{greeting.greetings}</h1>;
  }

  return <h1>Nothing to show</h1>;
};

export default Greeting;
