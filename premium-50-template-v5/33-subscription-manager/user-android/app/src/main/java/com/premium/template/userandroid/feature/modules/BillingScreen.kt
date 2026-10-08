package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun BillingScreen(onCreate:()->Unit){Card{Column{Text("Billing");Text("Domain-specific billing workflow");Button(onClick=onCreate){Text("Create")}}}}
