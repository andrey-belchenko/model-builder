<template>
  <div class="projects-view">
    <h2>UML Projects</h2>
    <p class="description">Manage your UML modeling projects</p>
    
    <div class="projects-grid">
      <ag-grid-vue
        class="ag-theme-alpine"
        style="height: 500px; width: 100%;"
        :columnDefs="columnDefs"
        :rowData="projects"
        :defaultColDef="defaultColDef"
        :pagination="true"
        :paginationPageSize="10"
        theme="legacy"
      />
    </div>
    
    <div class="actions">
      <Button label="New Project" icon="pi pi-plus" @click="createNewProject" />
      <Button label="Open Project" icon="pi pi-folder-open" @click="openProject" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import Button from 'primevue/button'
import { ColDef } from 'ag-grid-community'

interface Project {
  id: string
  name: string
  description: string
  lastModified: string
  elements: number
}

const projects = ref<Project[]>([
  {
    id: '1',
    name: 'E-commerce System',
    description: 'Online shopping platform architecture',
    lastModified: '2025-01-22',
    elements: 15
  },
  {
    id: '2',
    name: 'User Management',
    description: 'User authentication and authorization system',
    lastModified: '2025-01-21',
    elements: 8
  }
])

const columnDefs: ColDef[] = [
  { field: 'name', headerName: 'Project Name', sortable: true, filter: true },
  { field: 'description', headerName: 'Description', sortable: true, filter: true },
  { field: 'lastModified', headerName: 'Last Modified', sortable: true, filter: true },
  { field: 'elements', headerName: 'Elements', sortable: true, filter: true, width: 100 }
]

const defaultColDef: ColDef = {
  resizable: true,
  minWidth: 100
}

const createNewProject = () => {
  console.log('Create new project')
}

const openProject = () => {
  console.log('Open project')
}
</script>

<style scoped>
.projects-view {
  max-width: 1200px;
  margin: 0 auto;
}

.description {
  color: #666;
  margin-bottom: 2rem;
}

.projects-grid {
  margin-bottom: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}
</style>
