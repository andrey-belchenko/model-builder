<template>
  <div class="model-explorer-view">
    <h2>Model Explorer</h2>
    <p class="description">Explore and manage UML model elements</p>
    
    <div class="explorer-container">
      <div class="explorer-sidebar">
        <h3>Model Structure</h3>
        <Tree
          :value="modelTree"
          selectionMode="single"
          @node-select="onNodeSelect"
          class="model-tree"
        />
      </div>
      
      <div class="explorer-content">
        <div v-if="selectedNode" class="element-details">
          <h3>{{ selectedNode.label }}</h3>
          <div class="element-info">
            <p><strong>Type:</strong> {{ selectedNode.type }}</p>
            <p><strong>ID:</strong> {{ selectedNode.key }}</p>
          </div>
        </div>
        <div v-else class="no-selection">
          <p>Select an element from the tree to view details</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tree from 'primevue/tree'
import type { TreeNode } from 'primevue/tree'



const modelTree = ref<TreeNode[]>([
  {
    key: 'classes',
    label: 'Classes',
    type: 'folder',
    children: [
      { key: 'user-class', label: 'User', type: 'class' },
      { key: 'order-class', label: 'Order', type: 'class' },
      { key: 'product-class', label: 'Product', type: 'class' }
    ]
  },
  {
    key: 'interfaces',
    label: 'Interfaces',
    type: 'folder',
    children: [
      { key: 'repository-interface', label: 'Repository', type: 'interface' }
    ]
  },
  {
    key: 'enums',
    label: 'Enums',
    type: 'folder',
    children: [
      { key: 'status-enum', label: 'Status', type: 'enum' }
    ]
  },
  {
    key: 'relationships',
    label: 'Relationships',
    type: 'folder',
    children: [
      { key: 'user-order-rel', label: 'User → Order', type: 'association' },
      { key: 'order-product-rel', label: 'Order → Product', type: 'composition' }
    ]
  }
])

const selectedNode = ref<TreeNode | null>(null)

const onNodeSelect = (node: TreeNode) => {
  selectedNode.value = node
}
</script>

<style scoped>
.model-explorer-view {
  max-width: 1400px;
  margin: 0 auto;
}

.description {
  color: #666;
  margin-bottom: 2rem;
}

.explorer-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  height: 600px;
}

.explorer-sidebar {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
}

.explorer-sidebar h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.model-tree {
  border: none;
}

.explorer-content {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
}

.element-details h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.element-info p {
  margin-bottom: 0.5rem;
}

.no-selection {
  color: #666;
  text-align: center;
  padding: 2rem;
}
</style>
