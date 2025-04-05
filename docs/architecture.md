# Entities

### Card (UI)
- Stateless component
- Props: `flipped`, `matched`, `disabled`, `symbol`
- Delegates user interaction to Board

### Board (State + Layout)
- Holds card grid state
- Limits flipping to max 2 cards
- Tracks flipped cards
- Dispatches `flipCard` action
- Listens to card state via selectors

### Game (State)
- Tracks move count, timer, score, and win condition
- Responds to events such as `cardsMatched`, `resetGame`, etc.
- Manages overall game lifecycle

### GameHandlerService (Orchestrator)
- Subscribes to relevant selectors (e.g., flipped cards)
- Implements rule logic (e.g., checking for a match)
- Dispatches outcome actions like `cardsMatched`, `cardsNotMatched`, `gameWon`
- Debounces time-based effects (e.g., delay before flipping back)
