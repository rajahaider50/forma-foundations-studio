package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun DeliveryScreen(onCreate:()->Unit){Card{Column{Text("Delivery");Text("Domain-specific delivery workflow");Button(onClick=onCreate){Text("Create")}}}}
