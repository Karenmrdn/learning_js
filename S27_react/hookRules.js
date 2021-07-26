/* RULES:
1. Call React Hooks only in React Function:
- React Components
- Custom Hooks
2. Call React Hooks at the Top Level:
- Don't call them in nested functions
- Don't call them in any block statements */

/* RULE FOR useEffect: 
ALWAYS add everything you refer to inside of useEffect() as a dependency 
(except functions from useState since it is always static) */
