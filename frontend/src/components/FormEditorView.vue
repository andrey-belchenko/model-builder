<template>
  <div class="form-editor-view">
    <h2>Form Editor</h2>
    <p class="description">Edit UML element properties and relationships</p>
    
    <div class="form-container">
      <div class="form-sidebar">
        <h3>Element Types</h3>
        <div class="element-types">
          <Button 
            v-for="type in elementTypes" 
            :key="type.value"
            :label="type.label"
            :class="{ active: selectedElementType === type.value }"
            @click="selectElementType(type.value)"
            class="element-type-btn"
          />
        </div>
        
        <h3>Recent Elements</h3>
        <div class="recent-elements">
          <div 
            v-for="element in recentElements" 
            :key="element.id"
            class="recent-element"
            @click="selectElement(element)"
          >
            <span class="element-name">{{ element.name }}</span>
            <span class="element-type">{{ element.type }}</span>
          </div>
        </div>
      </div>
      
      <div class="form-content">
        <div v-if="selectedElement" class="element-form">
          <h3>{{ selectedElement.name }}</h3>
          
          <form @submit.prevent="saveElement">
            <div class="form-section">
              <h4>Basic Information</h4>
              <div class="form-row">
                <div class="form-field">
                  <label for="element-name">Name</label>
                  <InputText 
                    id="element-name"
                    v-model="selectedElement.name"
                    placeholder="Enter element name"
                  />
                </div>
                <div class="form-field">
                  <label for="element-type">Type</label>
                  <Dropdown
                    id="element-type"
                    v-model="selectedElement.type"
                    :options="elementTypes"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Select type"
                  />
                </div>
              </div>
            </div>
            
            <div class="form-section" v-if="selectedElement.type === 'class'">
              <h4>Properties</h4>
              <div class="properties-list">
                <div 
                  v-for="(prop, index) in selectedElement.properties" 
                  :key="index"
                  class="property-item"
                >
                  <div class="form-row">
                    <InputText 
                      v-model="prop.name"
                      placeholder="Property name"
                      class="property-name"
                    />
                    <InputText 
                      v-model="prop.type"
                      placeholder="Type"
                      class="property-type"
                    />
                    <Dropdown
                      v-model="prop.visibility"
                      :options="visibilityOptions"
                      placeholder="Visibility"
                      class="property-visibility"
                    />
                    <Button 
                      icon="pi pi-trash" 
                      @click="removeProperty(index)"
                      severity="danger"
                      size="small"
                    />
                  </div>
                </div>
                <Button 
                  label="Add Property" 
                  icon="pi pi-plus" 
                  @click="addProperty"
                  size="small"
                />
              </div>
            </div>
            
            <div class="form-actions">
              <Button type="submit" label="Save" icon="pi pi-check" />
              <Button label="Cancel" icon="pi pi-times" severity="secondary" @click="resetForm" />
            </div>
          </form>
        </div>
        <div v-else class="no-selection">
          <p>Select an element type or recent element to start editing</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'

interface ElementType {
  label: string
  value: string
}

interface Property {
  name: string
  type: string
  visibility: string
}

interface UMLElement {
  id: string
  name: string
  type: string
  properties?: Property[]
  methods?: any[]
}

const elementTypes: ElementType[] = [
  { label: 'Class', value: 'class' },
  { label: 'Interface', value: 'interface' },
  { label: 'Enum', value: 'enum' },
  { label: 'Package', value: 'package' }
]

const visibilityOptions = [
  { label: 'Public', value: 'public' },
  { label: 'Private', value: 'private' },
  { label: 'Protected', value: 'protected' }
]

const selectedElementType = ref<string>('')
const selectedElement = ref<UMLElement | null>(null)

const recentElements = ref<UMLElement[]>([
  { id: '1', name: 'User', type: 'class', properties: [] },
  { id: '2', name: 'Order', type: 'class', properties: [] },
  { id: '3', name: 'Repository', type: 'interface', properties: [] }
])

const selectElementType = (type: string) => {
  selectedElementType.value = type
  selectedElement.value = {
    id: `new-${Date.now()}`,
    name: `New${type.charAt(0).toUpperCase() + type.slice(1)}`,
    type,
    properties: type === 'class' ? [] : undefined
  }
}

const selectElement = (element: UMLElement) => {
  selectedElement.value = { ...element }
}

const addProperty = () => {
  if (selectedElement.value && selectedElement.value.properties) {
    selectedElement.value.properties.push({
      name: '',
      type: '',
      visibility: 'private'
    })
  }
}

const removeProperty = (index: number) => {
  if (selectedElement.value && selectedElement.value.properties) {
    selectedElement.value.properties.splice(index, 1)
  }
}

const saveElement = () => {
  console.log('Saving element:', selectedElement.value)
  // TODO: Implement save logic
}

const resetForm = () => {
  selectedElement.value = null
  selectedElementType.value = ''
}
</script>

<style scoped>
.form-editor-view {
  max-width: 1400px;
  margin: 0 auto;
}

.description {
  color: #666;
  margin-bottom: 2rem;
}

.form-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  height: 600px;
}

.form-sidebar {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
}

.form-sidebar h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.element-types {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.element-type-btn {
  text-align: left;
  justify-content: flex-start;
}

.element-type-btn.active {
  background-color: #3498db;
}

.recent-elements {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.recent-element {
  padding: 0.5rem;
  border: 1px solid #ecf0f1;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.recent-element:hover {
  background-color: #f8f9fa;
}

.element-name {
  display: block;
  font-weight: bold;
  color: #2c3e50;
}

.element-type {
  display: block;
  font-size: 0.8rem;
  color: #7f8c8d;
  text-transform: uppercase;
}

.form-content {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
}

.element-form h3 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.form-section {
  margin-bottom: 2rem;
}

.form-section h4 {
  margin-bottom: 1rem;
  color: #34495e;
  border-bottom: 1px solid #ecf0f1;
  padding-bottom: 0.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field label {
  font-weight: bold;
  color: #2c3e50;
}

.properties-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.property-item {
  border: 1px solid #ecf0f1;
  border-radius: 4px;
  padding: 1rem;
  background: #f8f9fa;
}

.property-item .form-row {
  grid-template-columns: 2fr 1fr 1fr auto;
  align-items: end;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #ecf0f1;
}

.no-selection {
  color: #666;
  text-align: center;
  padding: 2rem;
}
</style>
