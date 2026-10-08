package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun InvoicesScreen(onCreate:()->Unit){Card{Column{Text("Invoices");Text("Domain-specific invoices workflow");Button(onClick=onCreate){Text("Create")}}}}
