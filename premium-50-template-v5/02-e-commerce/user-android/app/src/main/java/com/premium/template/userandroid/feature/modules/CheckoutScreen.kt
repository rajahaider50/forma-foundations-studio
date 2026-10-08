package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun CheckoutScreen(onCreate:()->Unit){Card{Column{Text("Checkout");Text("Domain-specific checkout workflow");Button(onClick=onCreate){Text("Create")}}}}
