```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = async () => {
    try {
      await router.push('/another-page', undefined, { shallow: true });
      console.log('Successfully navigated to another page');
    } catch (error) {
      console.error('Error navigating to another page:', error);
      // Handle errors appropriately, such as displaying a user-friendly message
    }
  };

  return (
    <button onClick={handleClick}>
      Go to another page
    </button>
  );
}

export default MyComponent;
```