from interfaces.observer import Observer

class ConcreteObserver1(Observer):
    def __init__(self,subject):
        self.subject = subject

    def update(self):
        if(self.subject.state%2==0):
            print("Current Observer 1 called")


class ConcreteObserver2(Observer):
    def __init__(self,subject):
        self.subject = subject
    
    def update(self):
        if(self.subject.state%2!=0):
            print("Current Observer 2 called")