# Design Patterns

Design patterns in software engineering are reusable solutions to common problems that occur in software design. They are best practices that help developers solve recurring design challenges in a more efficient, maintainable, and scalable way. Design patterns are not specific code snippets but rather general templates for solving particular design issues.

## Categories of Design Patterns

Design patterns are broadly classified into three main categories:

### **Creational Patterns[6]**

These patterns deal with object creation mechanisms, optimizing the process of creating objects in a way that suits the specific situation. They abstract the instantiation process, making a system independent of how its objects are created.

- Singleton: Ensures a class has only one instance and provides a global point of access to that instance.
  Factory Method: Defines an interface for creating objects, but lets subclasses alter the type of objects that will be created.
- Abstract Factory: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
- Builder: Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
- Prototype: Creates new objects by copying an existing object (prototype) rather than instantiating new objects directly.

### **Structural Patterns[8]**

These patterns focus on the composition of classes and objects, ensuring that if one part of a system changes, the entire system doesn't need to be rebuilt. They help to form larger structures by using objects and classes in a flexible and efficient way.

- Adapter: Converts the interface of a class into another interface that a client expects, making incompatible interfaces work together.
- Bridge: Separates an abstraction from its implementation so that they can both vary independently.
- Composite: Composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and compositions uniformly.
- Decorator: Adds behavior or responsibilities to individual objects dynamically, without affecting other objects.
- Facade: Provides a simplified interface to a complex subsystem, making it easier for clients to interact with it.
- Flyweight: Reduces memory usage by sharing common parts of state among multiple objects rather than keeping it in each object.
- Proxy: Provides a surrogate or placeholder for another object to control access to it.

### **Behavioral Patterns[12]**

These patterns are concerned with algorithms and the assignment of responsibilities between objects. They help objects communicate in ways that are more flexible and avoid tight coupling.

- Chain of Responsibility: Passes a request along a chain of handlers. Each handler decides either to process the request or pass it to the next handler.
- Command: Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.
- Iterator: Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
- Mediator: Defines an object that encapsulates how a set of objects interact, promoting loose coupling by keeping objects from referring to each other explicitly.
- Memento: Captures and externalizes an object's internal state so that it can be restored later without violating encapsulation.
- Observer: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified automatically.
- State: Allows an object to alter its behavior when its internal state changes, making it appear as if the object changes its class.
- Strategy: Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
- Template Method: Defines the skeleton of an algorithm in a method, deferring some steps to subclasses.
- Visitor: Represents an operation to be performed on the elements of an object structure, allowing new operations to be defined without changing the classes of the elements.

## Summary:

| **Category**   | **Pattern Name**        | **Description**                             |
| -------------- | ----------------------- | ------------------------------------------- |
| **Creational** | Singleton               | Single instance access                      |
|                | Factory Method          | Interface for object creation               |
|                | Abstract Factory        | Create families of objects                  |
|                | Builder                 | Construct complex objects step-by-step      |
|                | Prototype               | Clone existing objects                      |
| **Structural** | Adapter                 | Convert interface to another                |
|                | Bridge                  | Separate abstraction from implementation    |
|                | Composite               | Treat objects uniformly in a tree structure |
|                | Decorator               | Add responsibilities dynamically            |
|                | Facade                  | Simplify subsystem interface                |
|                | Flyweight               | Share objects to save memory                |
|                | Proxy                   | Control access to another object            |
| **Behavioral** | Chain of Responsibility | Pass requests along a chain                 |
|                | Command                 | Encapsulate requests as objects             |
|                | Iterator                | Access elements sequentially                |
|                | Mediator                | Centralize object interaction               |
|                | Memento                 | Restore object state                        |
|                | Observer                | Notify dependents of state changes          |
|                | State                   | Change behavior based on state              |
|                | Strategy                | Swap algorithms dynamically                 |
|                | Template Method         | Define steps of an algorithm                |
|                | Visitor                 | Add operations to object structures         |
