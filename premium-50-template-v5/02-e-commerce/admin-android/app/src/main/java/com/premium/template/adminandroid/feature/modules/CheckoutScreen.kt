package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun CheckoutScreen(onCreate:()->Unit){Card{Column{Text("Checkout");Text("Domain-specific checkout workflow");Button(onClick=onCreate){Text("Create")}}}}
