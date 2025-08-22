// Mock UML Model Data Structure
// This will be replaced with real data persistence in future phases

export interface UMLProperty {
  id: string
  name: string
  type: string
  visibility: 'public' | 'private' | 'protected'
  multiplicity?: string
  isStatic?: boolean
  isFinal?: boolean
}

export interface UMLMethod {
  id: string
  name: string
  returnType: string
  visibility: 'public' | 'private' | 'protected'
  parameters: UMLParameter[]
  isStatic?: boolean
  isAbstract?: boolean
}

export interface UMLParameter {
  id: string
  name: string
  type: string
  direction: 'in' | 'out' | 'inout'
  multiplicity?: string
}

export interface UMLClass {
  id: string
  name: string
  type: 'class'
  properties: UMLProperty[]
  methods: UMLMethod[]
  position: { x: number; y: number }
  isAbstract?: boolean
  isFinal?: boolean
  stereotype?: string
}

export interface UMLInterface {
  id: string
  name: string
  type: 'interface'
  methods: UMLMethod[]
  position: { x: number; y: number }
  stereotype?: string
}

export interface UMLEnum {
  id: string
  name: string
  type: 'enum'
  values: UMLEnumValue[]
  position: { x: number; y: number }
}

export interface UMLEnumValue {
  id: string
  name: string
  value?: string
}

export interface UMLRelationship {
  id: string
  source: string
  target: string
  type: 'inheritance' | 'association' | 'composition' | 'aggregation' | 'dependency' | 'realization'
  multiplicity?: string
  role?: string
  navigability?: 'none' | 'forward' | 'backward' | 'bidirectional'
  stereotype?: string
}

export interface UMLPackage {
  id: string
  name: string
  type: 'package'
  elements: string[] // IDs of contained elements
  position: { x: number; y: number }
}

export interface UMLDiagram {
  id: string
  name: string
  type: 'class' | 'sequence' | 'use-case' | 'activity'
  elements: string[] // IDs of diagram elements
  relationships: string[] // IDs of diagram relationships
  viewport: {
    x: number
    y: number
    zoom: number
  }
}

export interface UMLProject {
  id: string
  name: string
  description: string
  version: string
  lastModified: string
  classes: UMLClass[]
  interfaces: UMLInterface[]
  enums: UMLEnum[]
  packages: UMLPackage[]
  relationships: UMLRelationship[]
  diagrams: UMLDiagram[]
}

// Sample mock data
export const mockProject: UMLProject = {
  id: 'ecommerce-system',
  name: 'E-commerce System',
  description: 'Online shopping platform architecture',
  version: '1.0.0',
  lastModified: '2025-01-22T10:00:00Z',
  
  classes: [
    {
      id: 'user-class',
      name: 'User',
      type: 'class',
      properties: [
        {
          id: 'user-id',
          name: 'id',
          type: 'string',
          visibility: 'private',
          multiplicity: '1'
        },
        {
          id: 'user-email',
          name: 'email',
          type: 'string',
          visibility: 'private',
          multiplicity: '1'
        },
        {
          id: 'user-password',
          name: 'password',
          type: 'string',
          visibility: 'private',
          multiplicity: '1'
        }
      ],
      methods: [
        {
          id: 'user-authenticate',
          name: 'authenticate',
          returnType: 'boolean',
          visibility: 'public',
          parameters: [
            {
              id: 'auth-email',
              name: 'email',
              type: 'string',
              direction: 'in'
            },
            {
              id: 'auth-password',
              name: 'password',
              type: 'string',
              direction: 'in'
            }
          ]
        },
        {
          id: 'user-save',
          name: 'save',
          returnType: 'void',
          visibility: 'public',
          parameters: []
        }
      ],
      position: { x: 100, y: 100 }
    },
    {
      id: 'order-class',
      name: 'Order',
      type: 'class',
      properties: [
        {
          id: 'order-id',
          name: 'id',
          type: 'string',
          visibility: 'private',
          multiplicity: '1'
        },
        {
          id: 'order-total',
          name: 'total',
          type: 'decimal',
          visibility: 'private',
          multiplicity: '1'
        },
        {
          id: 'order-status',
          name: 'status',
          type: 'OrderStatus',
          visibility: 'private',
          multiplicity: '1'
        }
      ],
      methods: [
        {
          id: 'order-calculate-total',
          name: 'calculateTotal',
          returnType: 'decimal',
          visibility: 'public',
          parameters: []
        }
      ],
      position: { x: 400, y: 100 }
    }
  ],
  
  interfaces: [
    {
      id: 'repository-interface',
      name: 'Repository',
      type: 'interface',
      methods: [
        {
          id: 'repo-save',
          name: 'save',
          returnType: 'T',
          visibility: 'public',
          parameters: [
            {
              id: 'repo-entity',
              name: 'entity',
              type: 'T',
              direction: 'in'
            }
          ]
        },
        {
          id: 'repo-find-by-id',
          name: 'findById',
          returnType: 'T?',
          visibility: 'public',
          parameters: [
            {
              id: 'repo-id',
              name: 'id',
              type: 'string',
              direction: 'in'
            }
          ]
        }
      ],
      position: { x: 700, y: 100 }
    }
  ],
  
  enums: [
    {
      id: 'order-status-enum',
      name: 'OrderStatus',
      type: 'enum',
      values: [
        { id: 'status-pending', name: 'PENDING' },
        { id: 'status-confirmed', name: 'CONFIRMED' },
        { id: 'status-shipped', name: 'SHIPPED' },
        { id: 'status-delivered', name: 'DELIVERED' },
        { id: 'status-cancelled', name: 'CANCELLED' }
      ],
      position: { x: 100, y: 400 }
    }
  ],
  
  packages: [
    {
      id: 'domain-package',
      name: 'Domain',
      type: 'package',
      elements: ['user-class', 'order-class', 'order-status-enum'],
      position: { x: 50, y: 50 }
    },
    {
      id: 'infrastructure-package',
      name: 'Infrastructure',
      type: 'package',
      elements: ['repository-interface'],
      position: { x: 650, y: 50 }
    }
  ],
  
  relationships: [
    {
      id: 'user-order-association',
      source: 'user-class',
      target: 'order-class',
      type: 'association',
      multiplicity: '1..*',
      role: 'orders',
      navigability: 'forward'
    },
    {
      id: 'order-status-association',
      source: 'order-class',
      target: 'order-status-enum',
      type: 'association',
      multiplicity: '1',
      role: 'status',
      navigability: 'forward'
    },
    {
      id: 'user-repository-realization',
      source: 'user-class',
      target: 'repository-interface',
      type: 'realization'
    }
  ],
  
  diagrams: [
    {
      id: 'domain-overview',
      name: 'Domain Overview',
      type: 'class',
      elements: ['user-class', 'order-class', 'order-status-enum', 'repository-interface'],
      relationships: ['user-order-association', 'order-status-association', 'user-repository-realization'],
      viewport: { x: 0, y: 0, zoom: 1.0 }
    }
  ]
}

export default mockProject
