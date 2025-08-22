# UML Model Builder - Frontend

This is the frontend application for the UML Model Builder, a web-based tool for creating and managing UML models with visual diagram editing capabilities.

## Features

- **Project Management**: Create and manage UML modeling projects
- **Model Explorer**: Tree-based navigation of UML model elements
- **Diagram Editor**: Visual UML diagram creation using Vue Flow
- **Form Editor**: Rich property editing for UML elements
- **Modern UI**: Built with PrimeVue components for professional appearance

## Technology Stack

- **Framework**: Vue 3 with TypeScript
- **UI Library**: PrimeVue 3.x
- **Diagram Engine**: @vue-flow/core
- **Data Grid**: ag-grid-vue3
- **State Management**: Pinia
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development server:
   ```bash
   pnpm dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/           # Vue components
│   ├── ModelExplorer/   # Model explorer components
│   ├── DiagramEditor/   # Diagram editing components
│   ├── FormEditor/      # Form editing components
│   └── shared/          # Shared components
├── composables/          # Vue composables
├── stores/              # Pinia stores
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── mock-data/           # Mock data for development
├── router/              # Vue Router configuration
├── App.vue              # Main application component
└── main.ts              # Application entry point
```

## Development

### Adding New Components

1. Create your component in the appropriate directory under `src/components/`
2. Use TypeScript interfaces for props and data
3. Follow the existing styling patterns
4. Add proper TypeScript types

### Mock Data

During development, the application uses mock data defined in `src/mock-data/uml-model.ts`. This will be replaced with real backend integration in future phases.

### Styling

- Use PrimeVue components for consistent UI
- Follow the existing CSS patterns
- Use CSS Grid and Flexbox for layouts
- Maintain responsive design principles

## Architecture

### Component Design

- **Composition API**: All components use Vue 3 Composition API
- **TypeScript**: Full type safety throughout the application
- **Props Interface**: Define clear interfaces for component props
- **Event Handling**: Use proper event handling patterns

### State Management

- **Pinia Stores**: For global state management
- **Component State**: Local state using `ref()` and `reactive()`
- **Props Down**: Pass data down through props
- **Events Up**: Emit events for parent communication

## Future Enhancements

- Backend integration with file system
- Real-time collaboration
- Advanced UML diagram types
- Code generation
- Export/import capabilities
- User authentication

## Contributing

1. Follow the existing code style and patterns
2. Write TypeScript interfaces for all data structures
3. Use PrimeVue components for UI elements
4. Test components thoroughly
5. Update documentation as needed

## License

MIT License - see LICENSE file for details
