import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '@/components/ProjectsView.vue'
import ModelExplorerView from '@/components/ModelExplorerView.vue'
import DiagramEditorView from '@/components/DiagramEditorView.vue'
import FormEditorView from '@/components/FormEditorView.vue'

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: ProjectsView
  },
  {
    path: '/explorer',
    name: 'Model Explorer',
    component: ModelExplorerView
  },
  {
    path: '/diagram',
    name: 'Diagram Editor',
    component: DiagramEditorView
  },
  {
    path: '/form',
    name: 'Form Editor',
    component: FormEditorView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
