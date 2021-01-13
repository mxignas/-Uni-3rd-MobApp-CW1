<template>
    <div class="Checkout-page">
        <div class="d-flex bg-secondary align-text">
            <div class="row">
                <!-- Goes back to home page when pressed -->
                <router-link :to="{name:'Index'}">
                    <div class="p-2 text-center text-dark btn" id="home"><strong>Home</strong> </div>
                </router-link>
                <div class="p-2 bg-info text-center" id="checkout"><strong>Checkout</strong></div>
            </div>
        </div>
        <h1 class="display-3 text-center text-info">Your cart</h1>
        <!-- cart container where lessons in cart are displayed -->
        <div class="container main">
            <div class="row">
                <div class="col-7 bg-secondary" >
                    <div class="row">
                        <!-- displaying lessons in cart with v-for -->
                        <div class="card bg-info" v-for="lesson in cart">
                            <div class="card-body bg-info">
                                <h3 class="card-title"> <strong>{{ lesson.lessonActivity }}</strong></h3>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Subject: </strong>{{ lesson.lessonActivity }} </li>
                                <li class="list-group-item"><strong>Location: </strong>{{ lesson.lessonLocation }} </li>
                                <li class="list-group-item"><strong>Price: </strong>{{ lesson.lessonPrice }} </li>
                                </ul>
                            </div>
                                <div class="card-body " id="remove">
                                    <!-- button which removes lesson on-click with rmvfromCart method -->
                                    <button type="button" class="btn btn-info" @click='rmvFromCart(lesson)'>Remove From Cart</button>
                                </div>
                        </div>
                    </div>  
                </div>
                <div class="col">
                    <!-- creating form and preventing default submit function -->
                    <form @submit.prevent="submitform">
                        <h2 class="display-4 text-center text-info">Your information</h2>
                        <div class="row">
                            <div class="col">
                                <label for="first_name">First name</label>
                                <!-- using v-model to dynamically insert insert first name in Order Information -->
                                <input type="text" class="form-control" placeholder="First name" v-model="firstName">
                                <!-- Checking validation with v-if and Vuelidate functions which helps to do that easier -->
                                <span class="text-danger" v-if="!$v.firstName.required && $v.firstName.$dirty">First name is required</span>
                                <span class="text-danger" v-if="(!$v.firstName.minLength || !$v.firstName.maxLength) && $v.firstName.$dirty">
                                    First name has to be between {{ $v.firstName.$params.minLength.min }} and {{ $v.firstName.$params.maxLength.max }} characters</span>
                            </div>
                            <div class="col">
                                <label for="last_name">Last name</label>
                                <input type="text" class="form-control" placeholder="Last name" v-model="lastName">
                                <span class="text-danger" v-if="!$v.lastName.required && $v.lastName.$dirty">Last name is required</span>
                                <span class="text-danger" v-if="(!$v.lastName.minLength || !$v.lastName.maxLength) && $v.lastName.$dirty">
                                    Last name has to be between {{ $v.lastName.$params.minLength.min }} and {{ $v.lastName.$params.maxLength.max }} characters</span>
                            </div>
                        </div>
                        <p></p>
                        <div class="form-group">
                            <label for="phone_number">Phone number</label>
                            <input type="number" id="phonevalidation" class="form-control" placeholder="Enter phone number" v-model="phone">
                            <span class="text-danger" v-if="!$v.phone.required && $v.phone.$dirty">Phone number is required</span>
                            <span class="text-danger" v-if="(!$v.phone.minLength || !$v.phone.maxLength) && $v.phone.$dirty">
                                    Phone number has to be between {{ $v.phone.$params.minLength.min }} and {{ $v.phone.$params.maxLength.max }} characters</span>
                        </div>
                        <div class="form-group">
                            <label for="email_address">Email address</label>
                            <input type="email" class="form-control" placeholder="Enter email" v-model="email">
                            <span class="text-danger" v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty">Email is required</span>
                        </div>
                        <div class="display-4 text-center">
                            Order information
                        </div>
                        <p></p>
                        <!-- in those {{ firstName }} we are getting firstName from input where we used v-model -->
                        <p><strong>First Name: </strong>{{ firstName }}</p>
                        <p><strong>Last Name: </strong>{{ lastName }}</p>
                        <p><strong>Phone Number: </strong>{{ phone }}</p>
                        <p><strong>Email: </strong>{{ email }}</p>
                        <div v-for="lesson in cart">
                        <input type="submit" class="btn btn-primary" @click='addOrder(lesson), updateSpace()'></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
// importing Vuelidate for easier form validating
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
    name: "Checkout",
    data: () => ({
        // data which we are binding with v-model
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
    }),
    // all the validations for the form
    validations: {
        firstName: {
            required,
            maxLength: maxLength(14),
            minLength: minLength(2)
        },
        lastName: {
            required,
            maxLength: maxLength(14),
            minLength: minLength(2)
        },
        phone: {
            required,
            maxLength: maxLength(12),
            minLength: minLength(8)
        },
        email: {
            required,
            email,
            maxLength: maxLength(20),
            minLength: minLength(5)
        },
    },
    methods: {
        rmvFromCart(lesson) {
            const lssn = this.$store.state.Lessons.find(lssn => {
                return lssn.lessonID == lesson.id
            });
            this.$store.state.cart.splice(this.$store.state.cart.indexOf(lesson), 1);
        },
        // method which submits the form
        submitform() {
            this.$v.$touch()
            // if this is not invalid then take us to the next page using $router
            if(!this.$v.$invalid) {
            alert("Succesfully purchased our product!")
            this.$store.state.cart = []
            this.$router.push({ name: 'Index' })
            }
        },
        addOrder(lesson){
            
            const lssn = this.$store.state.Lessons.find(lssn => {
                return lssn.lessonID == lesson.id
            });
            const newOrder = {name: this.firstName, PhoneNumber: this.phone, LessonID: lesson.id, NumberOfSpace: '1'};

            //set the url to your server and route
            fetch('https://calm-inlet-30176.herokuapp.com/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newOrder),
                })
                .then(response => response.json())
                .then(responseJSON => {
                    console.log('Success: ', responseJSON);
                });
            },
        updateSpace(){
            const currentlessons = this.$store.state.Lessons;
            fetch('https://calm-inlet-30176.herokuapp.com/api/lessons', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentlessons),
            })
            .then(response => response.json())
            .then(responseJSON => {
                console.log('Success: ', responseJSON);
            });
        }
    },
    // computed properties to get objects from $store
    computed: {
        cart() {
            return this.$store.state.cart;
        },
    },
}
</script>

<style scoped>
    #home {
        margin-left: 12px;
        text-align: justify;
    }
    #checkout {
        text-align: justify;
    }
    .container.main {
        padding-top: 40px;
    }
    .card {
    width: 20rem;
    margin: 10px 10px;
  }
</style>