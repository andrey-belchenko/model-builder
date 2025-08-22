<template>
  <div class="uml-class-node" :class="{ selected: selected }">
          <Handle
        type="target"
        :position="Position.Top"
        :style="{ left: '50%', transform: 'translateX(-50%)' }"
      />
    
    <div class="class-header">
      <h4>{{ data.name }}</h4>
    </div>
    
    <div class="class-properties" v-if="data.properties && data.properties.length > 0">
      <div class="section-title">Properties</div>
      <div 
        v-for="prop in data.properties" 
        :key="prop.name" 
        class="property"
      >
        {{ prop.visibility }} {{ prop.name }}: {{ prop.type }}
      </div>
    </div>
    
    <div class="class-methods" v-if="data.methods && data.methods.length > 0">
      <div class="section-title">Methods</div>
      <div 
        v-for="method in data.methods" 
        :key="method.name" 
        class="method"
      >
        {{ method.visibility }} {{ method.name }}(): {{ method.returnType }}
      </div>
    </div>
    
          <Handle
        type="source"
        :position="Position.Bottom"
        :style="{ left: '50%', transform: 'translateX(-50%)' }"
      />
  </div>
</template>

<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import type { NodeProps } from '@vue-flow/core'

interface UMLClassData {
  name: string
  properties?: Array<{
    name: string
    type: string
    visibility: string
  }>
  methods?: Array<{
    name: string
    returnType: string
    visibility: string
  }>
}

interface Props extends NodeProps<UMLClassData> {
  selected: boolean
}

defineProps<Props>()
</script>

<style scoped>
.uml-class-node {
  background: white;
  border: 2px solid #2c3e50;
  border-radius: 8px;
  padding: 12px;
  min-width: 200px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-family: 'Courier New', monospace;
  font-size: 12px;
}

.uml-class-node.selected {
  border-color: #3498db;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.3);
}

.class-header {
  border-bottom: 1px solid #2c3e50;
  padding-bottom: 8px;
  margin-bottom: 8px;
  text-align: center;
}

.class-header h4 {
  margin: 0;
  color: #2c3e50;
  font-size: 14px;
  font-weight: bold;
}

.section-title {
  font-weight: bold;
  color: #7f8c8d;
  margin-bottom: 4px;
  font-size: 11px;
  text-transform: uppercase;
}

.property, .method {
  padding: 2px 0;
  color: #2c3e50;
}

.property:not(:last-child), .method:not(:last-child) {
  border-bottom: 1px solid #ecf0f1;
}
</style>
