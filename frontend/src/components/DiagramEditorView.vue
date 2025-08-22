<template>
  <div class="diagram-editor-view">
    <h2>Diagram Editor</h2>
    <p class="description">Create and edit UML diagrams visually</p>
    
    <div class="diagram-container">
      <div class="diagram-toolbar">
        <Button label="Add Class" icon="pi pi-plus" @click="addClass" />
        <Button label="Add Interface" icon="pi pi-plus" @click="addInterface" />
        <Button label="Add Enum" icon="pi pi-plus" @click="addEnum" />
        <Button label="Clear" icon="pi pi-trash" @click="clearDiagram" severity="danger" />
      </div>
      
      <div class="diagram-canvas">
        <VueFlow
          v-model="elements"
          :default-viewport="{ zoom: 1.5 }"
          :min-zoom="0.2"
          :max-zoom="4"
          :node-types="nodeTypes"
          class="vue-flow-canvas"
          @connect="onConnect"
          @node-drag-stop="onNodeDragStop"
        >
          <Background pattern-color="#aaa" :gap="8" />
          <MiniMap />
          <Controls />
          
          <template #node-custom="nodeProps">
            <UMLClassNode v-bind="nodeProps" />
          </template>
        </VueFlow>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { MiniMap } from '@vue-flow/minimap'
import { Controls } from '@vue-flow/controls'
import Button from 'primevue/button'
import UMLClassNode from './DiagramEditor/UMLClassNode.vue'
import type { Node, Edge, Connection } from '@vue-flow/core'

const nodeTypes = {
  custom: UMLClassNode
}

const elements = ref<(Node | Edge)[]>([
  {
    id: 'sample-class',
    type: 'custom',
    position: { x: 200, y: 200 },
    data: {
      name: 'SampleClass',
      properties: [
        { name: 'id', type: 'string', visibility: 'private' },
        { name: 'name', type: 'string', visibility: 'public' }
      ],
      methods: [
        { name: 'save', returnType: 'void', visibility: 'public' }
      ]
    }
  }
])

const addClass = () => {
  const newNode: Node = {
    id: `class-${Date.now()}`,
    type: 'custom',
    position: { x: 100, y: 100 },
    data: {
      name: 'NewClass',
      properties: [],
      methods: []
    }
  }
  elements.value.push(newNode)
  console.log('Added class node:', newNode)
  console.log('Current elements:', elements.value)
}

const addInterface = () => {
  const newNode: Node = {
    id: `interface-${Date.now()}`,
    type: 'custom',
    position: { x: 300, y: 100 },
    data: {
      name: 'NewInterface',
      methods: []
    }
  }
  elements.value.push(newNode)
}

const addEnum = () => {
  const newNode: Node = {
    id: `enum-${Date.now()}`,
    type: 'custom',
    position: { x: 500, y: 100 },
    data: {
      name: 'NewEnum',
      values: []
    }
  }
  elements.value.push(newNode)
}

const clearDiagram = () => {
  elements.value = []
}

const onConnect = (connection: Connection) => {
  const newEdge: Edge = {
    id: `edge-${Date.now()}`,
    source: connection.source!,
    target: connection.target!,
    type: 'default'
  }
  elements.value.push(newEdge)
}

const onNodeDragStop = (event: any) => {
  console.log('Node dragged:', event)
}
</script>

<style scoped>
.diagram-editor-view {
  max-width: 1400px;
  margin: 0 auto;
}

.description {
  color: #666;
  margin-bottom: 2rem;
}

.diagram-container {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.diagram-toolbar {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  gap: 1rem;
}

.diagram-canvas {
  height: 600px;
  position: relative;
  background: #f8f9fa;
}

.vue-flow-canvas {
  height: 100%;
  width: 100%;
  background: #f8f9fa;
}

/* Ensure Vue Flow renders properly */
.vue-flow-canvas .vue-flow__viewport {
  background: #f8f9fa;
}
</style>
