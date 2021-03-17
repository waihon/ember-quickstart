import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Yehuda Katz', 'David Heinemeier Hansson', 'Jordan Walke', 'Evan You', 'Waihon Yew']
  }
}
